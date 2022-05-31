/* eslint-disable import/first */

// react testing library component debug max lines
// https://testing-library.com/docs/dom-testing-library/api-debugging/#automatic-logging
process.env.DEBUG_PRINT_LIMIT = '200000';

process.env.DY_TOKEN = '8769213';

import '@Utils/dotenv';
import '@Utils/logger/logger';
import '@Utils/domExtensions';

jest.setTimeout(120000);
