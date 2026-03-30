# Base Setup Notes

To fully unlock Base indexing and ownership verification for `https://rsvp-room.vercel.app`, replace these placeholders in `lib/base-app.ts`:

1. `baseManifestAccountAssociation.header`
2. `baseManifestAccountAssociation.payload`
3. `baseManifestAccountAssociation.signature`
4. `baseBuilderOwnerAddress`

Where to get them:
- Open Base Build / Base.dev for the `rsvp-room` project
- Use the preview or manifest tool for the production URL
- Copy the signed Account Association object
- Copy the wallet address used to import the project into Base Build

After those values are added, redeploy the app and re-run Base verification.
