import { put } from "../../../shared/request.helper";

export default function sendSubscription(user, email) {
    user.email = email;
    return put("/user/" + user.id, user);
}
