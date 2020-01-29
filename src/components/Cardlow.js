import React from 'react';
import Link from "next/link";
import config from '../config';
import PropTypes from 'prop-types';
import 'moment/locale/sw';
import Moment from 'react-moment';

function Cardlow ({ cardClass, cardInfo }) {
	const url = cardInfo.slug;
	const title = cardInfo.title.rendered;

	const date = cardInfo.modified;
	const coverUrl = cardInfo.medium_image_src || cardInfo.jetpack_featured_media_url;
	let categorySlug = "habari";
	let categoryName = "Habari";
	if (cardInfo.categories.length > 0) {
		const categoryId = cardInfo.categories[0];
		const category = config.menus.find(menu => menu.id === categoryId)
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
		<>
			<Link href="/[sectionSlug]/[articleSlug]" as={`/${categorySlug}/${url}`}>
				<a className={cardClass+' pos-relative mb-5'}>
					{videoUrl && videoUrl.length > 0 ? (
						<iframe
							title={title}
							src={videoUrl}
							allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
							className="wh-100x abs-tlr bg-map bg-grad-layer-6"
							style={{ width: '100%', height: '100%', border: '0'}} />
					): (
						<div className="wh-100x abs-tlr bg-map bg-grad-layer-6" style={{backgroundImage: 'url('+coverUrl+')'}}></div>
					)}
					<div className="ml-120 min-h-100x">
						<h5><b>{title}</b></h5>
						<h6 className="color-lite-black pt-10"><span className="color-primary">{categoryName}</span> {' | '}{momentsPublished}</h6>
					</div>
				</a>
			</Link>
		</>
    );
}

Cardlow.propTypes = {
	cardInfo: PropTypes.object.isRequired,
	cardClass: PropTypes.string.isRequired
}

export default Cardlow;
