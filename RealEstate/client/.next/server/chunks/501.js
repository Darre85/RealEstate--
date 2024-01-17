"use strict";
exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 5501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ StateContextProvider),
  "F": () => (/* binding */ useStateContext)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: external "web3modal"
var external_web3modal_ = __webpack_require__(2840);
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_);
;// CONCATENATED MODULE: ./context/RealEstate.json
const RealEstate_namespaceObject = JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"PropertyListed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"PropertyResold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"PropertySold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"productId","type":"uint256"},{"indexed":true,"internalType":"address","name":"reviewer","type":"address"},{"indexed":false,"internalType":"uint8","name":"rating","type":"uint8"},{"indexed":false,"internalType":"string","name":"comment","type":"string"}],"name":"ReviewAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"productId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"reviewIndex","type":"uint256"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"likes","type":"uint256"}],"name":"ReviewLiked","type":"event"},{"inputs":[{"internalType":"uint256","name":"productId","type":"uint256"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"string","name":"comment","type":"string"},{"internalType":"address","name":"user","type":"address"}],"name":"addReview","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"buyer","type":"address"}],"name":"buyProperty","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getAllProperties","outputs":[{"components":[{"internalType":"uint256","name":"productID","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"propertyTitle","type":"string"},{"internalType":"string","name":"category","type":"string"},{"internalType":"string","name":"images","type":"string"},{"internalType":"string","name":"propertyAddress","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"address[]","name":"reviewers","type":"address[]"},{"internalType":"string[]","name":"reviews","type":"string[]"}],"internalType":"struct RealEstate.Property[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHighestRatedProduct","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"productId","type":"uint256"}],"name":"getProductReviews","outputs":[{"components":[{"internalType":"address","name":"reviewer","type":"address"},{"internalType":"uint256","name":"productId","type":"uint256"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"string","name":"comment","type":"string"},{"internalType":"uint256","name":"likes","type":"uint256"},{"internalType":"uint256","name":"reviewIndex","type":"uint256"}],"internalType":"struct RealEstate.Review[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getProperty","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserProperties","outputs":[{"components":[{"internalType":"uint256","name":"productID","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"propertyTitle","type":"string"},{"internalType":"string","name":"category","type":"string"},{"internalType":"string","name":"images","type":"string"},{"internalType":"string","name":"propertyAddress","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"address[]","name":"reviewers","type":"address[]"},{"internalType":"string[]","name":"reviews","type":"string[]"}],"internalType":"struct RealEstate.Property[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserReviews","outputs":[{"components":[{"internalType":"address","name":"reviewer","type":"address"},{"internalType":"uint256","name":"productId","type":"uint256"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"string","name":"comment","type":"string"},{"internalType":"uint256","name":"likes","type":"uint256"},{"internalType":"uint256","name":"reviewIndex","type":"uint256"}],"internalType":"struct RealEstate.Review[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"productId","type":"uint256"},{"internalType":"uint256","name":"reviewIndex","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"likeReview","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"_propertyTitle","type":"string"},{"internalType":"string","name":"_category","type":"string"},{"internalType":"string","name":"_images","type":"string"},{"internalType":"string","name":"_propertyAddress","type":"string"},{"internalType":"string","name":"_description","type":"string"}],"name":"listProperty","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"listingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"propertyIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reviewsCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"updateListingPrice","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"productId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"updatePrice","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"productId","type":"uint256"},{"internalType":"string","name":"_propertyTitle","type":"string"},{"internalType":"string","name":"_category","type":"string"},{"internalType":"string","name":"_images","type":"string"},{"internalType":"string","name":"_propertyAddress","type":"string"},{"internalType":"string","name":"_description","type":"string"}],"name":"updateProperty","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./context/constants.js

//REAL ESTATE
//LOCAL ADDRESS
const REAL_ESTATE_ADDRESS = "0xA3F91557F91b7987fBC9a053Ced2F12aF105aC14";
const REAL_ESTATE_ABI = RealEstate_namespaceObject.Mt;

;// CONCATENATED MODULE: ./context/index.js




//INTERNAL  IMPORT

//FETCH CONTRACT
const FETCH_CONTRACT = (PROVIDER)=>new external_ethers_.ethers.Contract(REAL_ESTATE_ADDRESS, REAL_ESTATE_ABI, PROVIDER);
//CONNECTING WITH CONTRACT
const connectingWithSmartContract = async ()=>{
    try {
        const web3modal = new (external_web3modal_default())();
        const connection = await web3modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const PROVIDER = provider.getSigner();
        const contract = FETCH_CONTRACT(PROVIDER);
        return contract;
    } catch (error) {
        console.log(error);
    }
};
// INTERNAL
const StateContext = /*#__PURE__*/ (0,external_react_.createContext)();
const StateContextProvider = ({ children  })=>{
    //STATE VARIABLE
    const [currentAccount, setCurrentAccount] = (0,external_react_.useState)();
    const [accountBalance, setAccountBalance] = (0,external_react_.useState)();
    const [userBlance, setUserBlance] = (0,external_react_.useState)();
    const [getHighestRatedProduct, setGetHighestRatedProduct] = (0,external_react_.useState)();
    //---CHECK IF WALLET IS CONNECTD
    const checkIfWalletConnected = async ()=>{
        try {
            if (!window.ethereum) return console.log("Install MateMask");
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            // console.log(accounts[0]);
            } else {
                console.log("NO ACCOUNT");
            }
            const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
            const getBalance = await provider.getBalance(accounts[0]);
            const convertBal = external_ethers_.ethers.utils.formatEther(getBalance);
            setAccountBalance(convertBal);
            // console.log(convertBal);
            return accounts[0];
        } catch (error) {
            console.log("NO CONNACTION");
        }
    };
    (0,external_react_.useEffect)(()=>{
        checkIfWalletConnected();
    }, []);
    //---CONNET WALLET FUNCTION
    const connectWallet = async ()=>{
        try {
            if (!window.ethereum) return console.log("Install MateMask");
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    //CREATE PROPERTY
    const createPropertyFunction = async (form)=>{
        const { propertyTitle , description , category , price , images , propertyAddress  } = form;
        try {
            const contract = await connectingWithSmartContract();
            const address = await checkIfWalletConnected();
            const transaction = await contract.listProperty(address, price, propertyTitle, category, images, propertyAddress, description);
            await transaction.wait();
            console.log("contract call successs", transaction);
            window.location.reload();
        } catch (err) {
            console.log("contract call failure", err);
        }
    };
    //UPDATE PROPERTY
    const updatePropertyFunction = async (form)=>{
        const { productId , propertyTitle , description , category , images , propertyAddress  } = form;
        try {
            const contract = await connectingWithSmartContract();
            const address = await checkIfWalletConnected();
            const transaction = await contract.updateProperty(address, productId, propertyTitle, category, images, propertyAddress, description);
            await transaction.wait();
            console.info("contract call successs", transaction);
            window.location.reload();
        } catch (err) {
            console.error("contract call failure", err);
        }
    };
    //UPDATE PRICE
    const updatePriceFunction = async (form)=>{
        const { productID , price  } = form;
        try {
            const contract = await connectingWithSmartContract();
            const address = await checkIfWalletConnected();
            const transaction = await contract.updatePrice(address, productID, external_ethers_.ethers.utils.parseEther(price));
            await transaction.wait();
            console.info("contract call successs", transaction);
        } catch (err) {
            console.error("contract call failure", err);
        }
    };
    //BUY PROPERTY
    const buyPropertyFunction = async (buying)=>{
        const { productID , amount  } = buying;
        const money = external_ethers_.ethers.utils.parseEther(amount);
        try {
            const contract = await connectingWithSmartContract();
            const address = await checkIfWalletConnected();
            const transaction = await contract.buyProperty(productID, address, {
                value: money.toString()
            });
            await transaction.wait();
            console.info("contract call successs", transaction);
            window.location.reload();
        } catch (err) {
            console.error("contract call failure", err);
        }
    };
    //ADD REVIEW
    const addReviewFunction = async (from)=>{
        const { productID , rating , comment  } = from;
        try {
            const contract = await connectingWithSmartContract();
            const address = await checkIfWalletConnected();
            const transaction = await contract.addReview(productID, rating, comment, address);
            await transaction.wait();
            console.info("contract call successs", transaction);
            window.location.reload();
        } catch (err) {
            console.error("contract call failure", err);
        }
    };
    //REVIEW - LIKE
    const likeReviewFunction = async (from)=>{
        const { productID , reviewIndex  } = from;
        try {
            const contract = await connectingWithSmartContract();
            const address = await checkIfWalletConnected();
            const transaction = await contract.likeReview(productID, reviewIndex, address);
            await transaction.wait();
            console.info("contract call successs", transaction);
            window.location.reload();
        } catch (err) {
            console.error("contract call failure", err);
        }
    };
    //GET PROPERTIES DATA NORAML
    //getAllProperties()
    const getPropertiesData = async ()=>{
        const contract = await connectingWithSmartContract();
        const properties = await contract?.getAllProperties();
        const parsedProperties = properties?.map((property, i)=>({
                owner: property.owner,
                title: property.propertyTitle,
                description: property.description,
                category: property.category,
                price: external_ethers_.ethers.utils.formatEther(property.price.toString()),
                productID: property.productID.toNumber(),
                reviewers: property.reviewers,
                reviews: property.reviews,
                image: property.images,
                address: property.propertyAddress
            }));
        return parsedProperties;
    };
    //getHighestRatedProduct()
    const getHighestRatedProductFunction = async ()=>{
        try {
            const contract = await connectingWithSmartContract();
            const totalReviews = await contract.getHighestRatedProduct();
            setGetHighestRatedProduct(totalReviews.toNumber());
        } catch (error) {
            console.log(error);
        }
    };
    //getProductReviews()
    const getProductReviewsFunction = async (productId)=>{
        try {
            const contract = await connectingWithSmartContract();
            const getProductReviews = await contract.getProductReviews(Number(productId));
            const parsedReviews = getProductReviews?.map((review, i)=>({
                    reviewer: review.reviewer,
                    likes: review.likes.toNumber(),
                    comment: review.comment,
                    rating: review.rating,
                    productID: review.productId.toNumber(),
                    reviewIndex: review.reviewIndex.toNumber()
                }));
            return parsedReviews;
        } catch (error) {
            console.log(error);
        }
    };
    //getProperty()
    const getPropertyFunction = async (id)=>{
        try {
            const contract = await connectingWithSmartContract();
            const propertyItem = await contract.getProperty(Number(id));
            const property = {
                productID: propertyItem?.[0].toNumber(),
                owner: propertyItem?.[1],
                title: propertyItem?.[3],
                category: propertyItem?.[4],
                description: propertyItem?.[7],
                price: external_ethers_.ethers.utils.formatEther(propertyItem?.[2].toString()),
                address: propertyItem?.[6],
                image: propertyItem?.[5]
            };
            return property;
        } catch (error) {
            console.log(error);
        }
    };
    //getUserProperties()
    const getUserPropertiesFunction = async ()=>{
        try {
            const contract = await connectingWithSmartContract();
            const address = await checkIfWalletConnected();
            const properties = await contract.getUserProperties(address);
            const parsedProperties = properties.map((property, i)=>({
                    owner: property.owner,
                    title: property.propertyTitle,
                    description: property.description,
                    category: property.category,
                    price: external_ethers_.ethers.utils.formatEther(property.price.toString()),
                    productID: property.productID.toNumber(),
                    reviewers: property.reviewers,
                    reviews: property.reviews,
                    image: property.images,
                    address: property.propertyAddress
                }));
            return parsedProperties;
        } catch (error) {
            console.log(error);
        }
    };
    //getUserReviews()
    const getUserReviewsFunction = async ()=>{
        try {
            const contract = await connectingWithSmartContract();
            const address = await checkIfWalletConnected();
            const getUserReviews = await contract.getUserReviews(address);
            const parsedUserReviews = getUserReviews.map((property, i)=>({
                    comment: property.comment,
                    likes: property.likes.toNumber(),
                    productId: property.productId.toNumber(),
                    rating: property.rating,
                    reviewIndex: property.reviewIndex.toNumber(),
                    reviewer: property.reviewer
                }));
            return parsedUserReviews;
        } catch (error) {}
    };
    //totalProperty()
    const totalPropertyFunction = async ()=>{
        try {
            const contract = await connectingWithSmartContract();
            const address = await checkIfWalletConnected();
            const totalProperty = await contract.propertyIndex();
            return totalProperty.toNumber();
        } catch (error) {
            console.log(error);
        }
    };
    const totalReviewsFunction = async ()=>{
        try {
            const contract = await connectingWithSmartContract();
            const address = await checkIfWalletConnected();
            const totalReviews = await contract.reviewsCounter();
            return totalReviews.toNumber();
        } catch (error) {
            console.log(error);
        }
    };
    (0,external_react_.useEffect)(()=>{
        getHighestRatedProductFunction();
        getUserReviewsFunction();
        totalPropertyFunction();
        totalReviewsFunction();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(StateContext.Provider, {
        value: {
            //CONTRACT
            connectWallet,
            currentAccount,
            accountBalance,
            //PROPERTY
            createPropertyFunction,
            updatePropertyFunction,
            updatePriceFunction,
            buyPropertyFunction,
            getPropertyFunction,
            getUserPropertiesFunction,
            totalPropertyFunction,
            getPropertiesData,
            //REVIEW
            addReviewFunction,
            likeReviewFunction,
            getProductReviewsFunction,
            getUserReviewsFunction,
            totalReviewsFunction,
            getHighestRatedProduct,
            //STATE VARIABLE
            userBlance
        },
        children: children
    });
};
const useStateContext = ()=>(0,external_react_.useContext)(StateContext);


/***/ })

};
;