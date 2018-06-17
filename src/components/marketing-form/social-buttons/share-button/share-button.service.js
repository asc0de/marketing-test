import { put } from "../../../../shared/request.helper";

export default function updateShared(user) {
    user.shared = true;
    return put("/user/" + user.id, user);
}
