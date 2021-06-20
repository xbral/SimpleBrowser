import electron from 'electron';
import Store from 'electron-store';
import chokidar from 'chokidar';
import { JSONSchemaType } from 'json-schema-typed';

const userPreferencesSchema = {
  browserWindow: {
    type: JSONSchemaType.Object,
    properties: {
      width: { type: JSONSchemaType.Number },
      height: { type: JSONSchemaType.Number },
      transparent: { type: JSONSchemaType.Boolean },
      frame: { type: JSONSchemaType.Boolean },
      titleBarStyle: { type: JSONSchemaType.String },
      alwaysOnTop: { type: JSONSchemaType.Boolean },
      backgroundColor: { type: JSONSchemaType.String }
    }
  },
  url: {
    type: JSONSchemaType.String
  }
};

type userPreferencesProps = {
  browserWindow: {
      width: number,
      height: number,
      transparent: boolean,
      frame: boolean,
      titleBarStyle: 'customButtonsOnHover' | 'default' | 'hidden' | 'hiddenInset' | undefined,
      alwaysOnTop: boolean,
      backgroundColor: string,
  },
  url: string
};

const userPreferences = new Store<userPreferencesProps>({
  schema: userPreferencesSchema,
  watch: true,
  defaults: {
    browserWindow: {
      width: 600,
      height: 600,
      transparent: false,
      frame: false,
      titleBarStyle: 'customButtonsOnHover',
      alwaysOnTop: false,
      backgroundColor: 'transparent'
    },
    url: 'http://localhost:3000/'
  }
});

chokidar.watch(userPreferences.path).on('change', () => {
  electron.app.relaunch();
  electron.app.exit();
});

export default userPreferences;
