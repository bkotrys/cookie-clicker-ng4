import { Subject, Observable } from 'rx';
import { Message } from './Message';

export interface IMessageQueueProvider {
    CreateQueue<T>(name: string): MessageQueue;
    DeleteQueue<T>(queueName: string): boolean;
    Subscribe(queueName: string, name: string, onRecieve: any): void;
    Unsubscribe(queueName: string, subscriberName: string): void;
    Send(queueName: string, message: Message): void;
}

export class MessageQueueProvider implements IMessageQueueProvider {

    private queues: Array<MessageQueue>;

    /* @ngInject */
    constructor() {
        this.queues = new Array<MessageQueue>();
    }

    public CreateQueue<T>(name: string): MessageQueue {
        let mq = new MessageQueue();
        mq.QueueName = name;
        mq.QueueSubject = new Subject<Message>();
        mq.QueueSubscribers = new Array<Subscriber>();
        this.queues.push(mq);
        return this.queues.find(x => x.QueueName === name);
    }

    public DeleteQueue<T>(queueName: string): boolean {
        let queue = this.queues.find(x => x.QueueName === queueName);
        if (queue) {
            // find and remove item from an array
            var i = this.queues.indexOf(queue);
            if (i !== -1) {
                this.queues.splice(i, 1);
            }

            return true;
        }

        throw "Queue not found";
    }

    public Subscribe(queueName: string, name: string, onRecieve: any): void {

        let queue = this.queues.find(x => x.QueueName === queueName);
        if (!queue) {
            queue = this.CreateQueue(queueName);
        }

        var observer = Rx.Observer.create(message => onRecieve(message));
        var subscription = queue.QueueSubject.asObservable().subscribe(observer);

        var subscriber = new Subscriber();
        subscriber.SubscriberName = name;
        subscriber.Subscription = subscription;

        queue.QueueSubscribers.push(subscriber);
    }

    public Unsubscribe(queueName: string, subscriberName: string): void {

        let queue = this.queues.find(x => x.QueueName === queueName);
        if (!queue) {
            throw "Queue not found";
        }

        var subscriber = queue.QueueSubscribers.find(x => x.SubscriberName === subscriberName);
        if (subscriber) {
            subscriber.Subscription.dispose();
            var i = queue.QueueSubscribers.indexOf(subscriber);
            if (i !== -1) {
                queue.QueueSubscribers.splice(i, 1);
            }
            return;
        }
        throw "Subscriber not found";
    }

    public Send(queueName: string, message: Message): void {

        let queue = this.queues.find(x => x.QueueName === queueName);
        if (!queue) {
            throw "Queue not found";
        }
        message.MessageId = Date.now().toString();
        queue.QueueSubject.onNext(message);
    }
}

class Subscriber {
    public SubscriberName: string;
    public Subscription: Rx.Disposable;
}

class MessageQueue {
    public QueueName: string;
    public QueueSubject: Subject<Message>;
    public QueueSubscribers: Array<Subscriber>;
}

export function MessageQueueProviderFactory() {
    return new MessageQueueProvider();
}