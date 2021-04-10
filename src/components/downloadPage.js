import { API_URL } from "../utils/constants";

export const DownloadPage = () => {
    const downloadFile = () => {
        let url = `${API_URL}/cakes`
        fetch(url, {
            method: "GET",
            responseType: 'blob' // <-- MOVE THIS LINE INTO REQUEST
        })
            .then(response => {
                //Create a Blob from the PDF Stream
                const file = new Blob(
                    [response.body],
                    { type: 'application/octet-stream' });
                //Build a URL from the file
                const fileURL = URL.createObjectURL(file);
                //Open the URL on new Window
                window.open(fileURL);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <button className='btn-success' type='button' onClick={downloadFile}>Download</button>
    )
}