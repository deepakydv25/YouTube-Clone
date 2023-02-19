import React from "react";

const commentsData = [
  {
    name: "Deepak Yadav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Deepak Yadav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Deepak Yadav",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Deepak Yadav",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Deepak Yadav",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Deepak Yadav",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Deepak Yadav",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                          {
                            name: "Deepak Yadav",
                            text: "Lorem ipsum dolor sit amet, consectetur adip",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Deepak Yadav",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Deepak Yadav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Deepak Yadav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 rounded-lg my-2">
      <img
        className="h-12 w-12 p-1"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 border border-l-black pl-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-2 w-[1110px]">
      <h1 className="font-bold py-2">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
