// actions are where most of the business logic takes place
// they are dispatched by views or by other actions
// there are 3 types of actions:
//  async thunks - when doing asynchronous business logic like accessing a service
//  sync thunks - when you have substantial business logic but it's not async
//  plain object actions - when you just send a plain action to the reducer

import _ from 'lodash';
import * as types from './actionsTypes';
import redditService from '../../services/reddit';

export const fetchTopics = () => {
    return async(dispatch) => {
        try {
            const subredditArray = await redditService.getDefaultSubreddits();
            const topicsByUrl = _.keyBy(subredditArray, (subreddit) => subreddit.url);
            dispatch({ type: types.TOPICS_FETCHED, topicsByUrl });
        } catch (error) {
            console.error(error);
        }
    };
};