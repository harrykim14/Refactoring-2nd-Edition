// 메서드를 다 옮기면 이 클래스를 삭제
class TrackingInformation {
    // get shippingCompany() { return this._shippingCompany; }
    // set shippingCompany(arg) { this._shippingCompany = arg; }
    // get trackingNumber() { return this._trackingNumber; }
    // set trackingNumber(arg) { this._trackingNumber = arg; }
    // get display() {
    //     return `${this.shippingCompany}: ${this.trackingNumber}`;
    // }
}

class Shipment {
    get trackingInfo() {
       // return this._trackingInformation.display;
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
    get shippingCompany() { return this._shippingCompany; }
    set shippingCompany(arg) { this._shippingCompany = arg; }

    get trackingNumber() { return this._trackingNumber; }
    set trackingNumber(arg) { this._trackingNumber = arg; }

    get trackingInformation() { return this._trackingInformation; }
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}

// 클라이언트 사용 예
// aShipment.trackingInformation.shippingCompany = request.vendor;
aShipment.shippingCompany = request.vendor; // 로 변경


