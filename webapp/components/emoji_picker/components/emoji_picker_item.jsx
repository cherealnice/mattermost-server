// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';

import EmojiStore from 'stores/emoji_store.jsx';

export default class EmojiPickerItem extends React.Component {
    static propTypes = {
        emoji: React.PropTypes.object.isRequired,
        onItemOver: React.PropTypes.func.isRequired,
        onItemOut: React.PropTypes.func.isRequired,
        onItemClick: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleMouseOver() {
        this.props.onItemOver(this.props.emoji);
    }

    handleMouseOut() {
        this.props.onItemOut(this.props.emoji);
    }

    handleClick() {
        this.props.onItemClick(this.props.emoji);
    }

    render() {
        const name = this.props.emoji.name || this.props.emoji.aliases[0];

        return (
            <img
                className='emoji-picker__item emoticon'
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                onClick={this.handleClick}
                align='absmiddle'
                src={EmojiStore.getEmojiImageUrl(this.props.emoji)}
                title={':' + name + ':'}
            />
        );
    }
}