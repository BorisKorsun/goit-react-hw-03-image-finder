import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik'

const initialValues = {
    formQuery: '',
}

class Searchbar extends Component {
    state = {
        formQuery: '',
    };

    onFieldChange = (e) => {
        const name = e.target['name']
        const { value } = e.target

        this.setState({
            [name]: value,
        });
    };

    onSubmit = () => {
        this.props.onSubmit(this.state)
        this.resetState();
    };

    resetState = () => {
        this.setState({
            formQuery: '',
        });
    };

    render() {
        const { formQuery } = this.state

        return (
        <Formik 
        initialValues={initialValues}
        onSubmit={this.onSubmit}
        >
            <header className="searchbar">
            <Form className="form">
                <button type="submit" className="button">
                <span className="button-label">Search</span>
                </button>

                <Field
                onChange={this.onFieldChange}
                value={formQuery}
                name='formQuery'
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </Form>
            </header>
        </Formik>
        )
    }
};

export default Searchbar;