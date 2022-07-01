import React, { useEffect, useState } from "react";
import MemberCollectionBar from "../components/memberCollection/MemberCollectionBar";
import MemberSearchBar from "../components/memberCollection/MemberSearchBar";
import {
  AiFillHeart,
  AiOutlineStar,
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineDelete,
} from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import UserCommentCard from "../components/memberCollection/UserCommentCard";
import { API_URL } from "../utils/config";
import axios from "axios";
import { useFavoriteState, useUserState } from "../utils/redux/hooks-redux";
import { calcLength } from "framer-motion";

//生成評價星星
const star = (score) => {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    if (i < score) {
      arr.push(<AiFillStar className="icon-sm" />);
    } else {
      arr.push(<AiOutlineStar className="icon-sm" />);
    }
  }
  return arr;
};

const MemberColloction = () => {
  const [isOn, setIsOn] = useState(1);
  const [memberCollection, setMemberCollection] = useFavoriteState();
  const [comment, setComment] = useState([]);
  // const [favorite, setFavorite] = useFavoriteState()
  const [currentUser] = useUserState();
  console.log(currentUser);

  //讀取資料
  useEffect(() => {
    let getMemberCollection = async () => {
      //TODO:currentUserId要記得改成變數
      let response = await axios.get(API_URL + `/user/favorite_product/${currentUser.id}`);
      setMemberCollection(response.data.allResults);
      // console.log(response.data.allResults);
    };
    getMemberCollection();

    let getComment = async () => {
      let response = await axios.get(API_URL + "/user/comment/1");
      setComment(response.data.allResults);
      console.log(response.data);
    };
    getComment();
  }, []);
  return (
    <>
      <div className="mx-0 ">
        <div className="">
          <MemberCollectionBar isOn={isOn} setIsOn={setIsOn} />
        </div>
        <div className="my-6">
          <MemberSearchBar />
        </div>
        <div className="pt-8 bg-white md:pt-0 md:px-10">
          <h2 className="hidden py-2 border-b h2 md:block">
            {isOn == 1 ? "我的收藏" : "商品評論"}
          </h2>

          {isOn == 1 &&
            memberCollection.map((v, i) => {
              const {
                user_id,
                product_id,
                id,
                name,
                price,
                description,
                express_id,
                created_at,
              } = v;
              return (
                <>
                  {/* 圖片 備註 評分*/}
                  <div className="flex items-center justify-around px-0 py-1 border-b md:py-6 md:px-8">
                    <div className="overflow-hidden ">
                      <img
                        className=""
                        src="/images/memberCollectionAndOrder/member_order1.png"
                        alt=""
                      />
                    </div>
                    {/* 商品價格活動 */}

                    <div className="mr-1 font-normal text-right md:ml-1 ">
                      <p className="mb-3 md:h4">商品</p>
                      <p className="mb-3 md:h4">價格</p>
                      <p className="md:hidden ">活動</p>
                      <p className="hidden md:block h4">目前活動</p>
                    </div>

                    <div>
                      <p className="mb-3 md:p">{name}</p>
                      <p className="mb-3 md:p">{price}</p>
                      <button className="px-1 text-white md:p bg-warning">
                        母親節特賣
                      </button>
                    </div>
                    {/* 被唾棄ㄉ兩欄UI */}
                    {/* <div className="">
                    <div className="flex mb-10 md:h4">
                      <p className="mr-1">商品</p>
                      <p className="mr-4">{name}</p>
                      <p  className="mr-1">價格</p>
                      <p>{price}</p>
                    </div>
                      <div className="flex">
                      <p className="md:hidden ">活動</p>
                      <p className="hidden mr-3 md:block h4">目前活動</p>
                      <button className="px-1 text-white md:p bg-warning">
                        母親節特賣
                      </button>
                      </div>
                    </div> */}

                    {/* 評分 */}
                    {/* 不確定這裡這樣寫對不對QQ */}
                    {/* 有評分score變數 */}
                    <div className="hidden text-center md:block mx-18 ">
                      <p className="mb-1 mr-2 note">{comment.length>0?'評價':'尚未評價'}</p>
                      <h2 className=" h3">
                        {comment.length>0? comment[i].score:'-'}/5
                      </h2>

                      <div className="flex">
                        {comment.length>0? star(comment[i].score):star(0)}
                      </div>
                    </div>
                    {/* 沒有評分 */}
                    {/* <div className="hidden text-center md:block mx-18 ">
                      <p className="mr-2 note">
              尚未評價
                      </p>
                      <h2 className=" h3">-/5</h2>

                      <div className="flex">{star(0)}</div>
                    </div> */}

                    {/* 移除&購買 */}
                    <div className="flex-col md:ml-4 ">
                      <Button
                        size="sm"
                        className="flex items-center mb-3 rounded-sm md:p bg-warning"
                      >
                        立即購買 <AiOutlineShoppingCart className="icon-sm" />
                      </Button>

                      <Button
                        size="sm"
                        color="amber"
                        variant="outlined"
                        className="rounded-sm md:p"
                      >
                        <span
                          className="flex items-center "
                          //TODO: 要重新整理才會出來
                          onClick={async () => {
                            console.log(user_id);
                            let response = await axios.delete(
                              `${API_URL}/user/favorite_product/${user_id}?product_id=${product_id}`
                            );
                            console.log(response);
                          }}
                        >
                          移除收藏 <AiOutlineDelete className="icon-sm" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        {isOn == 2 && <UserCommentCard isOn={isOn} setIsOn={setIsOn} />}
      </div>
    </>
  );
};

export default MemberColloction;
