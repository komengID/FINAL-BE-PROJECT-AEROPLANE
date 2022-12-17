const { google } = require('googleapis');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

module.exports = {
    generateAuthURL: () => {
        const scopes = [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ];
        return oauth2Client.generateAuthUrl({
            access_type: 'offline',
            response_type : 'code',
            scope: scopes
        });
    },

    setCredentials: async(code) => {
        return new Promise(async(resolve, reject) => {
            try {
                const { tokens } = await oauth2Client.getToken(code);
                oauth2Client.setCredentials(tokens);
                resolve(tokens);
            } catch (error) {
                reject(error);
            }
        })
    },
    getUserData: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const oauth2 = google.oauth2({
                    auth: oauth2Client,
                    version: 'v2'
                });
                oauth2.userinfo.get((err, res) => {
                    if(err) reject(err);
                    else resolve(res.data);
                });
            } catch (error) {
                reject(error);
            }
        })
    }
}