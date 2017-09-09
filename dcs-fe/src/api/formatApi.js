import $ from 'jquery';

const baseUrl = "http://localhost:5000";

function getUrl(apiPath) {
    return baseUrl + apiPath;
}

class FormatApi {
    static getAllFormats() {
        return fetch(getUrl("/api/formats"))
            .then(response => {
                if (response.ok)
                    return response.json();
                throw new Error("Error during getting formats");
            });
    }

    static saveFormat(format) {
        const url = getUrl("/api/formats");
        const json = JSON.stringify(format);

        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: json
        }).then(response => {
            if (response.ok)
                return response.json();
            throw new Error("Error during save");
        });
    }
}

export default FormatApi;
