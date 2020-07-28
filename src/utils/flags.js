import Rox from 'rox-browser'
A
export const Flags = {
	sidebar: new Rox.Flag(false),
	title: new Rox.Flag(false)
};

const options = {
};

Rox.register('default', Flags);
Rox.setup(process.env.VUE_APP_ROLLOUT_KEY, options);
