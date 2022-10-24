import * as variables from '../util/variables';
import * as preRequests from './preRequests'
export const createBooking = {
    firstname: variables.userFirstName,
    lastname: variables.userLastName,
    totalprice: preRequests.price,
    depositpaid: false,
    bookingdates: {
        checkin: preRequests.checkinDate,
        checkout: preRequests.checkoutDate
    },
    additionalneeds: variables.userAdditionalRequest
}