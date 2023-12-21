import React from 'react';

function Profile(props) {
	const { imageSrc = 'https://i.imgur.com/MK3eW3Am.jpg', key = null, customStyle = {} } = props;

	return (
		<img
			style={Object.assign({height: 200, width: 200}, customStyle)}
			src={imageSrc}
			alt="Katherine Johnson"
		/>
	)
}

Profile.propTypes = {
	imageSrc: String,
	customStyle: Object
};
export default Profile
