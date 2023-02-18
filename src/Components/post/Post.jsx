import "./post.css";

export default function Post({ img }) {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">Lorem ipsum dolor sit amet</span>
				<hr />
				<span className="postDate">1 hr ago</span>
			</div>
			<p className="postDesc">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
				ex aliquid obcaecati sint id. Maiores veniam nesciunt aspernatur
				distinctio, dicta voluptates quaerat doloremque qui iste quas
				explicabo cum iure rem.
			</p>
		</div>
	);
}
