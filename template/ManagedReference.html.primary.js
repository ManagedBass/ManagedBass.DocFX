// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.

var mrefCommon = require('./ManagedReference.common.js');

exports.transform = function (model)  {
  model = mrefCommon.transform(model);
  return {item: model};
}