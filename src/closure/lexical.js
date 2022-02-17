const buildCount = (i) => {
    let count = i ;
    const displaycount = () => {
        console.log(count++);
    }
    return displaycount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
