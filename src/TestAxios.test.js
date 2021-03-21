import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import axiosMock from 'axios'
import TestAxios from './TestAxios'

jest.mock('axios')

it('should display a loading text', () => {

 const { getByTestId } = render(<TestAxios />)

  expect(getByTestId('loading')).toHaveTextContent('Loading...')
})

it('should load and display the data', async () => {
  const url = 'https://geneo-app.herokuapp.com/api/blog'
  const { getByTestId } = render(<TestAxios url={url} />)

  axiosMock.get.mockResolvedValueOnce({
    data: { "blogPosts":[{"title":"Post 1","id":1,"date":1576281600,"src":"/images/logged_out/blogPost1.jpg","snippet":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.","content":""},{"title":"Post 2","id":2,"date":1576281600,"src":"/images/logged_out/blogPost2.jpg","snippet":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.","content":""},{"title":"Post 3","id":3,"date":1576281600,"src":"/images/logged_out/blogPost6.jpg","snippet":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.","content":""}] },
  })

  fireEvent.click(getByTestId('fetch-data'))

  const blogPosts = await waitFor(() => getByTestId('show-data'))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(blogPosts).toHaveTextContent('1')
})