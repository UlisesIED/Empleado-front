const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = (error) => {
            reject(error);
        };
    });
};

export const handleFileInputChange = async (e, setImagen) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
        const base64 = await getBase64(file);
        file["base64"] = base64;
        setImagen(base64);
    } catch (error) {
        console.log(error);
    }
};
