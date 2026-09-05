{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        nodeShim = pkgs.writeShellScriptBin "node" ''
          case "''${1-}" in
            -v | --version)
              exec ${pkgs.bun}/bin/bun -e 'console.log("v" + process.versions.node)'
              ;;
          esac
          exec -a node ${pkgs.bun}/bin/bun "$@"
        '';
      in
      {
        devShells.default =
          with pkgs;
          mkShell {
            buildInputs = [
              bun
              nodeShim
            ];
            LD_LIBRARY_PATH = lib.makeLibraryPath [ stdenv.cc.cc.lib ];
          };
      }
    );
}
