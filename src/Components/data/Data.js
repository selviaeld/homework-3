import axios from "axios";

export default function getData() {
    axios
        .get (
            "https://gist.githubusercontent.com/aryapradipta9/0b8d0a1a113e3594d34c68c72ec32daf/raw/cb5d20b494bd2cb259d31596b9e8eea02e0f6d1e/single-sample.js"
        )
        .then (result => {
            console.log(result.data);
        })
        .catch(err => {
            alert(err);
        });
}
