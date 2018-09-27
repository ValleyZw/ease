import React from 'react'
import Redirect from 'umi/redirect';

// redirect demo: maybe there is a better way
export default () => <Redirect exact from="/" to="/login" />