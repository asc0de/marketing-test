import { get } from "../../shared/request.helper";

export default function fetchUser(id) {
    return get("/user/" + id);
}
