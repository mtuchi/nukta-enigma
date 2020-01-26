import React from 'react';
import Link from "next/link";
import config from '../config';
import PropTypes from 'prop-types';
import 'moment/locale/sw';
import Moment from 'react-moment';

function Card ({ cardClass, cardInfo }) {
	const url = cardInfo.slug;
	const title = cardInfo.title.rendered;

	const date = cardInfo.modified;
	const coverUrl = cardInfo.full_image_src || cardInfo.jetpack_featured_media_url;
	let categorySlug = "habari";
	let categoryName = "Habari";
	if (cardInfo.categories.length > 0) {
		const categoryId = cardInfo.categories[0];
		const category = config.menus.find(menu => menu.id === categoryId);
		if (category) {
			categorySlug = category.slug;
			categoryName = category.name
		}
	}

	const TWO_DAYS = 2 * 24 * 60 * 60 * 1000; /* ms */
	const dateToFormat = new Date(date);
	const now = new Date();
	const momentsPublished = now - dateToFormat > TWO_DAYS ? (
		<Moment locale="sw" format="D MMM, YYYY" withTitle>{dateToFormat}</Moment>
	): (
		<Moment locale="sw" fromNow>{dateToFormat}</Moment>
	)
	const videoUrl = cardInfo.acf.videourl || null;
	return (
		<div className={cardClass}>
			{videoUrl && videoUrl.length > 0 ? (
				<iframe
					title={title}
					src={videoUrl}
					allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
					className="rw75 bg-layer"
					style={{ width: '100%', height: '20vh', paddingBottom: 0, border: '0'}} />
			): (
				<div className="rw75 bg-layer" style={{backgroundImage: 'url('+coverUrl+')'}}></div>
			)}
			<h4 className="pt-20">
				<Link href={`/${categorySlug}/${url}`}><a><b>{title}</b></a>
				</Link></h4>
			<ul className="list-li-mr-20 pt-10 mb-30">
				<li className="color-lite-black">
					<span className="color-primary">{categoryName}</span> {' | '}{momentsPublished}</li>
			</ul>
		</div>
    );
}

Card.propTypes = {
	cardInfo: PropTypes.object.isRequired,
	cardClass: PropTypes.string.isRequired
}

export default Card;
