import logger from '@utils/logger';
import './modules';
import './components';

/*
 * hack for qucik tailwind compilation
 * https://github.com/tailwindlabs/tailwindcss/issues/443#issuecomment-661559687
 */

import './styles/tailwind/before.css';
import './styles/index.scss';
import './styles/tailwind/after.css';

logger.info('hello');
