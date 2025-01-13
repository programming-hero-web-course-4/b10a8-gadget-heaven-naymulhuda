const getStoredToWishList = () => {
    const storedWishStr = localStorage.getItem('wish-list');
    if (storedWishStr) {
        const storedWish = JSON.parse(storedWishStr);
        return storedWish;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWish = getStoredToWishList();
    if(storedWish.includes(id)){
       // already exist
       console.log(id ,'already exists in the list')
    }
    else {
      storedWish.push(id);
      const storedWishStr = JSON.stringify(storedWish);
      localStorage.setItem('wish-list', storedWishStr);
      console.log(id, 'added to the wishlist')
    }
}

export { addToStoredWishList };