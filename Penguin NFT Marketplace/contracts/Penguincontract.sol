pragma solidity ^0.5.12;

import "./IERC721.sol";
import "./ownable.sol";

contract Penguincontract is IERC721, Ownable {

    uint256 public constant CREATION_LIMIT_GEN0 = 10;
    string public constant name = "MichaelPenguins";
    string public constant symbol = "MP";

    event Birth(
        address owner,
        uint256 penguinId,
        uint256 mumId,
        uint256 dadId,
        uint256 genes
        );

    struct Penguin {
        uint256 genes;
        uint256 birthTime;
        uint256 mumId;
        uint256 dadId;
        uint256 generation;
    }

    Penguin[] penguins; 

    mapping (uint256 => address) public PenguinIndexToOwner;
    mapping (address => uint256) ownershipTokenCount; 

    uint256 public gen0Counter;

    function getPenguin(uint256 _id) external view returns (
        uint256 genes,
        uint256 birthTime,
        uint256 mumId,
        uint256 dadId,
        uint256 generation
        //address owner
    )
    {
        Penguin storage penguin = penguins[_id];

        birthTime = uint256(penguin.birthTime);
        mumId = uint256(penguin.mumId);
        dadId = uint256(penguin.dadId);
        generation = uint256(penguin.generation);
        genes = penguin.genes;
    }

    function createPenguinGen0(uint256 _genes) public onlyOwner returns (uint256) {
        require(gen0Counter < CREATION_LIMIT_GEN0);

        gen0Counter++;

        return _createPenguin(0, 0, 0, _genes, msg.sender);
    }

    function _createPenguin(
        uint256 _mumId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) private returns (uint256) {
        Penguin memory _penguin = Penguin({
            genes: _genes,
            birthTime: uint64(now),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });

        uint256 newPenguinId = penguins.push(_penguin) - 1;

        emit Birth(_owner, newPenguinId, _mumId, _dadId, _genes);

        _transfer(address(0), _owner, newPenguinId);
    }

    /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
      function balanceOf(address owner) external view returns (uint256 balance) {
        return ownershipTokenCount[owner];
    }
    /*
     * @dev Returns the total number of tokens in circulation.
     */
    function totalSupply() external view returns (uint) {
        return penguins.length;
    }
    
    function ownerOf(uint256 _tokenId) external view returns (address){
        return PenguinIndexToOwner[_tokenId];
    }
    
    function transfer(address _to, uint256 _tokenId) external {
        require(_to != address(0));
        require(_to != address(this));
        require(_owns(msg.sender, _tokenId));

        _transfer(msg.sender, _to, _tokenId);
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        ownershipTokenCount[_to]++;

        PenguinIndexToOwner[_tokenId] = _to;

        if (_from != address(0)) {
            ownershipTokenCount[_from]--;
        }   

        emit Transfer(_from, _to, _tokenId);
    }

    function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
        return PenguinIndexToOwner[_tokenId] == _claimant;
    }
    
}
