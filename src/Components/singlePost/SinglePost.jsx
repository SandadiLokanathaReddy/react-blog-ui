import "./singlePost.css";

export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
					className="singlePostImg"
				/>
				<h1 className="singlePostTitle">
					Lorem ipsum dolor sit amet
					<div className="singlePostEdit">
						<i className="singlePostIcon fa-regular fa-pen-to-square"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author : <b>Loka</b>
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Est amet doloribus, nihil assumenda error eius sit hic
					necessitatibus eum atque in officia? Adipisci obcaecati
					dolorem sapiente enim accusamus cum a. Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Deleniti repudiandae
					animi quo porro aut placeat. Aliquam natus temporibus
					aliquid exercitationem veniam. Eos at ipsam architecto! Quia
					quisquam explicabo autem repudiandae? Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Sapiente inventore
					cupiditate nam maxime ad hic odit enim vitae corrupti! Nihil
					dolorum quo a! Sed recusandae dignissimos atque! Qui, vero
					necessitatibus! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Deleniti, adipisci doloribus est tenetur
					ratione voluptatum eligendi id libero nam laboriosam
					delectus laudantium perspiciatis veniam maxime velit harum,
					reprehenderit molestiae. Alias. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Deleniti a reprehenderit
					numquam earum quos similique debitis dolorem quae, iure
					facere ad ipsa atque tenetur obcaecati illo adipisci laborum
					eos dignissimos!
				</p>
			</div>
		</div>
	);
}
