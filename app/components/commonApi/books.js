import apiCall from '../../api/apiRequest';
import endPoints from '../../api/endPoints'

export default function getAllBooks() {
    return apiCall({
        method: 'get',
        endpoint: endPoints.books
    });
}