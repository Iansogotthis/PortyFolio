{pkgs}: {
  deps = [
    pkgs.npm-check-updates
    pkgs.nodePackages.npm
    pkgs.nodePackages_latest.node-pre-gyp
    pkgs.react-static
    pkgs.react-native-debugger
    pkgs.haskellPackages.react
  ];
}
