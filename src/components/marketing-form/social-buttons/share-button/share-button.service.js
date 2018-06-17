import { put } from "../../../../shared/request.helper";

const mapUser = user => {
    return {
        id: user.id,
        shared: user.shared,
        email: user.email
    };
};

export default function updateShared(user) {
    user.shared = true;
    return put("/user/" + user.id, mapUser(user));
}
