export default interface SmsSender {
    send(phone: string, message: string): Promise<void>
}
