import { client } from '../utils/client'

export const getCard = async () => {
    return client
        .getEntries({ content_type: 'ingnNyheder' })
        .then((response) => response)
        .catch((err) => console.log(err))
}