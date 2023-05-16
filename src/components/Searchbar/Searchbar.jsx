import React, { Component } from 'react';
import { Formik } from 'formik'
import { SearchBarHeader, SearchFormButton, SearchForm, SearchFormLabel, SearchFormField } from './Searchbar.styled';

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
            <SearchBarHeader>
            <SearchForm>
                <SearchFormButton type="submit">
                <SearchFormLabel>Search</SearchFormLabel>
                </SearchFormButton>

                <SearchFormField
                onChange={this.onFieldChange}
                value={formQuery}
                name='formQuery'
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </SearchForm>
            </SearchBarHeader>
        </Formik>
        )
    }
};

export default Searchbar;