import {content} from "../util/variables";

import('jest-matcher-one-of'); //toBeOneOf not the default for jest. Need to install additional package jest-matcher-one-of
import {getFirstUser} from "../httpMethods/getFirstUser";
import {getTheSecondUser} from "../httpMethods/getTheSecondUser";
import {postBody} from "../httpMethods/postBody";
import {createBooking} from "../bodies/createBooking";

let response;
export let gender;
export let nat;

describe("get first user", () => {
    beforeAll(async () => {
        response = await getFirstUser();
    });

    afterAll(() => {
        gender = response.data.results[0].gender;
        nat = response.data.results[0].nat;
        console.log("first_user_data:", response.data);
        console.log("response_code:", response.status);
        console.log("response_text:", response.statusText);
        console.log("response_gender:", gender);
        console.log("response_nat:", response.data.results[0].nat);
        console.log("response_gender:", response.data.results[0].gender);
    });

    test("status code is 200", async () => {
        await expect(response.status).toEqual(200);
    });

    test("status text is OK", async () => {
        await expect(response.statusText).toEqual('OK');
    });

    test("compare the gender in response", async () => {
        await expect(response.data.results[0].gender).toBeOneOf(["female", "male"]);
    });
});

describe("get  user via predefined parameters", () => {
    beforeAll(async () => {
        response = await getTheSecondUser();
    });

    afterAll(() => {
        console.log("second_user_data:", response.data);
        console.log("response_code:", response.status);
        console.log("response_text:", response.statusText);
        console.log("response_gender:", response.data.results[0].gender);
        console.log("response_nat:", response.data.results[0].nat);
    })
    test("status code is 200", async () => {
        await expect(response.status).toEqual(200);
    });

    test("status text is OK", async () => {
        await expect(response.statusText).toEqual('OK');
    });

    test("gender is equal expected value", async () => {
        await expect(response.data.results[0].gender).toEqual(gender);
    });

    test("nat is equal expected value", async () => {
        await expect(response.data.results[0].nat).toEqual(nat)
    });
});

//the second example to postBody
describe("example for post requests with body", () => {
    response = postBody(createBooking, content);
    console.log("response_created_body:", response.data);
    console.log("response_code:", response.status);
    console.log("response_text_code:", response.statusText);

    test("status code is 200", async () => {
        await expect(response.status).toEqual(200);
    });

    test("status text is OK", async () => {
        await expect(response.statusText).toEqual("OK");
    });
});