import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';
import {Modal} from './tedmodal.jsx';

export class Profile extends React.Component {

	render() {
		let company = this.props.company;
		
		if (!(typeof this.props.txt === 'undefined')) {
			return (
				<div className={css(styles.descriptioncontainer)}>
					<span className={css(styles.teddescriptionbar)} />
					<p className={css(styles.description)}> {this.props.txt} </p>
				</div>
			);
		}
		
		if (this.props.title == "") {
			return (
				<div className={css(styles.blank)}>
					<div className={css(styles.tedprofile)}>
						<img src={this.props.img} className={css(styles.profilepicture)} />
					</div>
				</div>
			);
		}
		
		if (typeof company === 'undefined') {
			return (
				<div className={css(styles.tedprofile)}>
					<p className={css(styles.title)}> {this.props.title} </p>
					<p className={css(styles.subtitletwo)}> {this.props.role} </p>
					<img src={this.props.img} className={css(styles.profilepicture)} />
				</div>
			);
		} else {
			return (
				<div className={css(styles.tedprofile)}>
					<p className={css(styles.title)}> {this.props.title} </p>
					<p className={css(styles.subtitleone)}> {this.props.company} </p>
					<p className={css(styles.subtitletwo)}> {this.props.role} </p>
					<img src={this.props.img} 
                        onClick={() => this.props.openModal(this.props.img, this.props.title, this.props.role)} 
                        className={css(styles.profilepicture)} />
				</div>
			);
		}
	}
}

const styles = StyleSheet.create({
	tedprofile: {
		width: '100%',
		minWidth: '70px',
		maxWidth: '600px',
		position: 'relative',
	},
    profilepicture: {
        display: 'block',
		width:'100%',
		height:'auto',
		opacity:'1',
		':hover': {
			opacity: '0.7'
        }
    },
	title: {
		position: 'absolute',
		fontSize: '2vw',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
		margin:'10% 0px 0px 7%',
		color:'white',
		textShadow:'2px 2px #000000',
	},
    subtitleone: {
		position: 'absolute',
        fontSize: '1.5vw',
		fontWeight: 'normal',
        fontFamily: 'AvenirBlack',
		margin:'75% 0px 0px 7%',
		color:'white',
		textShadow:'2px 2px #000000',
    },
	subtitletwo: {
		position: 'absolute',
        fontSize: '1.5vw',
		fontWeight: 'normal',
        fontFamily: 'Avenir',
		margin:'85% 0px 0px 7%',
		color:'white',
		textShadow:'2px 2px #000000',
	},
	blank: {
		opacity:'0',
	},
	descriptioncontainer: {
		width: '100%',
		height:'22vw',
		minWidth: '70px',
		maxWidth: '600px',
		position: 'relative',
		overflowY:'scroll',
	},
	description: {
		fontWeight: 'normal',
        fontFamily: 'Avenir',
		height:'85%',
		fontSize:'14px',
		marginTop:'10%',
		marginBottom:'0px',
	},
	teddescriptionbar: {
        background: '#E62B25',
		position:'absolute',
        height: '5%',
        width: '100%',
        marginLeft: '0px',
        marginBottom: '0px',
		marginTop:'0px',
    },
});