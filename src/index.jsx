import React, {useEffect, useRef} from 'react';

export default (deps = [], opts = {}) => {
	const scrollHelper = useRef();

	useEffect(() => {
		const {current} = scrollHelper;
		current.scrollIntoView(opts);
	}, deps);

	return () => <div ref={scrollHelper} />;
};
