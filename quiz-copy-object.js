const user = {
    id: 4,
    organization: {
        name: 'ABC',
    },
}

const updatedUser = {
    ...user,
    organization: {
        ...user.organization,
        position: 'Director',
    },
};

console.log(updatedUser);