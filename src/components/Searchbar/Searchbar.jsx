import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik'

class Searchbar extends Component {
static initialValues = {
    query: '',
};
    render() {
        return (
        <Formik initialValues={this.initialValues}>
            <header className="searchbar">
            <Form className="form">
                <button type="submit" className="button">
                <span className="button-label">Search</span>
                </button>

                <Field
                name='query'
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