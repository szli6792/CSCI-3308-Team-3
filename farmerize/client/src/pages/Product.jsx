import { React, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { useFetch } from '../utils/hook';
import './Product.css';
import star from '../assets/star.svg';
import placeholderImage1 from '../assets/placeholderImage1.svg';
import placeholderImage2 from '../assets/placeholderImage2.svg';

/*
Product page. 
*/

const Product = () => {

  const location = useLocation();
  const productID = location.state.productID
  console.log(productID)

  // Database request for product ID
  const [data] = useFetch('/api/sql/getitem?id=' + productID);
  //init form input
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  //handle submit review
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your review has been entered');

  // should be removed/obfuscated before release, good for testing

    //create review
    console.log(productID)
    const resp = fetch('/api/sql/createreview?productID=' + productID + '&review=' + review + '&rating=' + rating, {  method: 'Post' });
    console.log('/api/sql/createreview?productID=' + productID + '&review=' + review + '&rating=' + rating)
  }

  return (
    <div class="product-page">
      <div class="first-div">
        <div class="top-left-product-image"><img class="icon-star" src={`/images/${data.Img}`}/></div>
        <div class="right-of-image">
          <div class="titles">
            <div class="product-name quicksand-semi-bold-black-44-2px">{data.Name}</div>
            <div class="price">${data.Price}</div>
          </div>
          <div class="review-bar">
              <div class="star-bar">
                          <div class="star-frame">
                            <img
                            class="icon-star" src={star} />
                            <img
                            class="icon-star" src={star} />
                            <img
                            class="icon-star" src={star} />
                            <img
                            class="icon-star" src={star} />
                            <img
                            class="icon-star" src={star} />
                          </div>
                          <div class="text-1">(26)</div>
              </div>
                          <div class="seller"><span class="span0">By </span><span class="span1">{data.FarmName}</span></div>
          </div>
          <div class="product-description quicksand-semi-bold-black-33-2px">
            {data.Description}    
          </div>
        </div>
      </div>
      <div class="second-div">
        <div class="image-seperator">
              <div class="about-the-product quicksand-semi-bold-black-44-2px">About the Product</div>
              <div class="text-grouping2 quicksand-semi-bold-black-33-2px">
                {data.About}
              </div>
        </div>
        <img className="product-image" src={`/images/Farm${data.FarmID}_1.png`} />
      </div>
      <div class="third-div">
          <div class="image-seperator">
              <div class="about-the-farmer quicksand-semi-bold-black-44-2px">About the Farmer</div>
              <div class="text-grouping2 quicksand-semi-bold-black-33-2px">
                {data.FarmAbout}
              </div>
          </div>
          <img className="product-image" src={`/images/Farm${data.FarmID}_2.png`} />
      </div>
      <div class="fourth-div">    
         <div class="overlap-group3">
                <div class="leave-a-review quicksand-semi-bold-black-44-2px">Leave a Review</div>
          </div>
          <div class="text-grouping2">
            <div class="form-input" >
            <form onSubmit={handleSubmit}>
              <div class="light-contained-default-default">
                <label
                  class="overlap-group1"><div class="rating-1 stars">
                  <form action="" onChange={(e) => setRating(e.target.value)}>
                    <input
                     value="5"
                      class="star star-5" id="star-5" type="radio" name="star"/>
                    <label class="star star-5" for="star-5"></label>
                    <input
                     value="4"
                       class="star star-4" id="star-4" type="radio" name="star"/>
                    <label class="star star-4" for="star-4"></label>
                    <input
                     value="3"
                       class="star star-3" id="star-3" type="radio" name="star"/>
                    <label class="star star-3" for="star-3"></label>
                    <input
                     value="2"
                       class="star star-2" id="star-2" type="radio" name="star"/>
                    <label class="star star-2" for="star-2"></label>
                    <input
                     value="1"
                       class="star star-1" id="star-1" type="radio" name="star"/>
                    <label class="star star-1" for="star-1"></label>
                  </form>
                </div></label>
                </div>
              <div class="light-contained-default-default">
                <label 
                class="overlap-group2" ><p class="quicksand-medium-silver-chalice-30px">{!review ? "Product Review" : ""}</p>
                  <textarea 
                  class="rating-2"
                  type='text'
                  name='review'
                  value={review}
                  required
                  title="Enter your product review"
                  onChange={(e) => setReview(e.target.value)}></textarea></label>
              </div>
              <div class="create-button">
            <button type= "submit" class="accountbutton"><div class="label valign-text-middle">Submit</div></button>
        </div>
        </form>
            </div>
          </div>
      </div>
    <div class="empty"></div>
  </div>
  );
};

export default Product;
