/* eslint-disable no-param-reassign */
const { resetPassword } = require('../../operations');

const resetPasswordResolver = (config, collection) => async (_, args, context) => {
  if (args.locale) context.locale = args.locale;
  if (args.fallbackLocale) context.fallbackLocale = args.fallbackLocale;

  const options = {
    collection,
    config,
    data: args,
    req: context,
    api: 'GraphQL',
    user: context.user,
  };

  const token = await resetPassword(options);

  return token;
};

module.exports = resetPasswordResolver;