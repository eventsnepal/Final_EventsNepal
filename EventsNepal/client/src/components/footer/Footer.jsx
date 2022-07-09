import styled from "styled-components";
import { ipadAirResponsive800, mobile } from "../../responsive.js";

const Container = styled.div`
	width: 100%;
	background-color: #ccc;
	height: 35vh;
	display: flex;
	justify-content: space-between;
	padding: 0px 0px 0px 200px;
	color: black;
	${mobile({
		flexDirection: "column",
		height: "10vh",
		padding: "0px",
	})}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1`
	color: teal;
	${mobile({
		fontSize: "20px",
	})}
`;

const Desc = styled.p`
	margin: 20px 0px;
	${mobile({
		margin: "8px 0px",
	})}
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	background-color: #${(props) => props.color};
	width: 32px;
	color: white;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
	${mobile({
		marginRight: "8px",
		width: "28px",
		height: "28px",
	})}
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${ipadAirResponsive800({
		display: "none",
	})}
`;

const Title = styled.h3`
	margin-bottom: 30px;
	color: teal;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({
		marginTop: "-70px",
	})}
`;

const PaymentMethod = styled.div`
	display: flex;
	align-items: center;
`;

const Image = styled.img`
	width: 50%;
	margin-left: 10px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>EventsNepal</Logo>
				<Desc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
					aspernatur dignissimos delectus a adipisci fuga autem provident, eum
					excepturi quibusdam dolor laborum et nemo officia natus magni nam
					neque distinctio.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<i className="fa-brands fa-facebook-f"></i>
					</SocialIcon>
					<SocialIcon color="E4405F">
						<i className="fa-brands fa-instagram"></i>
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<i className="fa-brands fa-twitter"></i>
					</SocialIcon>
					<SocialIcon color="E60023">
						<i className="fa-brands fa-pinterest-p"></i>
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>USEFUL LINKS</Title>
				<List>
					<ListItem>Party Palace</ListItem>
					<ListItem>Contact Us</ListItem>
					<ListItem>Banquet</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Seminar Halls</ListItem>
					<ListItem>Terms</ListItem>
					<ListItem>Booking</ListItem>
					<ListItem>About Us</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<i
						className="fa-solid fa-house"
						style={{ marginRight: "10px", color: "#08173b" }}
					></i>{" "}
					Kathmandu, Nepal
				</ContactItem>
				<ContactItem>
					<i
						className="fa-solid fa-phone"
						style={{ marginRight: "10px", color: "#08173b" }}
					></i>{" "}
					+977 9808039886
				</ContactItem>
				<ContactItem>
					<i
						className="fa-solid fa-envelope"
						style={{ marginRight: "10px", color: "#08173b" }}
					></i>{" "}
					eventsnepal@gmail.com
				</ContactItem>
				<PaymentMethod>
					<i
						className="fa-solid fa-money-check"
						style={{ marginRight: "10px", color: "#08173b" }}
					/>
					<Image src="https://i.ibb.co/Qfvn4z6/payment.png" />
				</PaymentMethod>
			</Right>
		</Container>
	);
};

export default Footer;