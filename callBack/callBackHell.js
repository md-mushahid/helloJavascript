function getData(dataId, getNextData) {

    setTimeout(() => {
        console.log("data", dataId);
    }, 2000);

    if (getNextData) {
        getNextData();
    }
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        })
    });
})

