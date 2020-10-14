import React, { Component } from 'react';

class CommentError extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(err) {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return <span>Something went wrong</span>
        }
        return <>{this.props.children}</>
    }
}

export default CommentError;