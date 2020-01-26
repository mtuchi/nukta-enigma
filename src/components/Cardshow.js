import React from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';
import config from '../config';
import 'moment/locale/sw';
import Moment from 'react-moment';


function Cardshow  ({ cardClass, cardInfo }) {
	const url = cardInfo.slug;
	const title = cardInfo.title.rendered;

	const date = cardInfo.modified;
	const coverUrl = cardInfo.full_image_src || cardInfo.jetpack_featured_media_url;
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
		<div className={cardClass}>
			<Link href={`/${categorySlug}/${url}`}>
				<a className="pos-relative h-100 dplay-block text-left" >
						{videoUrl && videoUrl.length > 0 ? (
							<iframe
								title={title}
								src={videoUrl}
								allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
								className="img-bg bg-1 bg-grad-layer-6"
								style={{ width: '100%', height: '100%', border: '0'}} />
						): (
							<div className="img-bg bg-1 bg-grad-layer-6" style={{ backgroundImage: 'url('+coverUrl+')' }}></div>
						)}
						<div className="bg-clr-black abs-blr color-white p-10 bg-sm-color-7 font-10">
							<h4 className="mb-0 font-11"><b>{title}</b></h4>
							<ul className="list-li-mr-20">
								<li><span className="color-primary">{categoryName}</span> {' | '}{momentsPublished}</li>
							</ul>
						</div>
				</a>
			</Link>
		</div>
	);
}

Cardshow.propTypes = {
	cardInfo: PropTypes.object.isRequired,
	cardClass: PropTypes.string.isRequired
}

export default Cardshow;
