import React from 'react';
import {Link} from 'react-router-dom';

export default function Default() {
	return (
		<div className='container error-main'>
			<div className='error-page'>
				<h1>404</h1>
				<h3>Stránka nebola nájdená</h3>
				<Link to={'/'}>
					<button type="button" className="btn btn-error mt-3">Návrat domov</button>
				</Link>
			</div>
		</div>
	)
}